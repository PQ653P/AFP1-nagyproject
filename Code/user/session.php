<?php session_start(); ?>
<?php if (array_key_exists('username', $_SESSION)): ?>

    <script>
        var username = '<?= $_SESSION['username'] ?>';
        var password = '<?= $_SESSION['password'] ?>';
    </script>

<?php endif; ?>
